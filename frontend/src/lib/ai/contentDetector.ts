import * as tf from '@tensorflow/tfjs';

export class AIContentDetector {
  private model: tf.LayersModel | null = null;
  private readonly features: string[] = [
    'repetitive_patterns',
    'natural_flow',
    'contextual_coherence',
    'vocabulary_diversity',
    'sentence_structure'
  ];

  async analyzeContent(content: string) {
    // Initialize model if not loaded
    if (!this.model) {
      await this.initializeModel();
    }

    const features = this.extractFeatures(content);
    const prediction = await this.predict(features);

    return {
      isAIGenerated: prediction > 0.7,
      confidence: prediction,
      features: this.getDetectedFeatures(features)
    };
  }

  private async initializeModel() {
    this.model = await tf.sequential({
      layers: [
        tf.layers.dense({ units: 10, inputShape: [5], activation: 'relu' }),
        tf.layers.dense({ units: 1, activation: 'sigmoid' })
      ]
    });
  }

  private extractFeatures(content: string): number[] {
    const words = content.toLowerCase().split(/\s+/);
    const sentences = content.split(/[.!?]+/);

    return [
      this.calculateRepetition(words),
      this.calculateNaturalFlow(sentences),
      this.calculateCoherence(sentences),
      this.calculateVocabularyDiversity(words),
      this.calculateSentenceComplexity(sentences)
    ];
  }

  private calculateRepetition(words: string[]): number {
    const uniqueWords = new Set(words).size;
    return 1 - (uniqueWords / words.length);
  }

  private calculateNaturalFlow(sentences: string[]): number {
    return Math.min(sentences.length / 10, 1);
  }

  private calculateCoherence(sentences: string[]): number {
    return Math.min(sentences.length / 5, 1);
  }

  private calculateVocabularyDiversity(words: string[]): number {
    return Math.min(new Set(words).size / 100, 1);
  }

  private calculateSentenceComplexity(sentences: string[]): number {
    const avgLength = sentences.reduce((sum, s) => sum + s.length, 0) / sentences.length;
    return Math.min(avgLength / 100, 1);
  }

  private async predict(features: number[]): Promise<number> {
    if (!this.model) return 0;

    const prediction = await this.model.predict(
      tf.tensor2d([features])
    ) as tf.Tensor;
    
    return (await prediction.data())[0];
  }

  private getDetectedFeatures(features: number[]): string[] {
    return this.features.filter((_, i) => features[i] > 0.7);
  }
}