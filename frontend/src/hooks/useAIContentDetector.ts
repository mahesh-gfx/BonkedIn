import { useState, useEffect } from 'react';
import { AIContentDetector } from '@/lib/ai/contentDetector';

const detector = new AIContentDetector();

export function useAIContentDetector(content: string) {
  const [isAIGenerated, setIsAIGenerated] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const [features, setFeatures] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    let mounted = true;

    const analyzeContent = async () => {
      try {
        const result = await detector.analyzeContent(content);
        
        if (mounted) {
          setIsAIGenerated(result.isAIGenerated);
          setConfidence(result.confidence);
          setFeatures(result.features);
        }
      } catch (error) {
        console.error('Error analyzing content:', error);
      } finally {
        if (mounted) {
          setIsAnalyzing(false);
        }
      }
    };

    analyzeContent();

    return () => {
      mounted = false;
    };
  }, [content]);

  return {
    isAIGenerated,
    confidence,
    features,
    isAnalyzing
  };
}