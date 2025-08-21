import {
  SkeletonContainer,
  SkeletonField,
  SkeletonLabel,
  SkeletonInput,
  SkeletonTextarea,
  SkeletonTitle
} from './LoadingSkeleton.styled';

export const LoadingSkeleton: React.FC = () => {
  return (
    <SkeletonContainer>
      <SkeletonTitle />
      
      <SkeletonField>
        <SkeletonLabel />
        <SkeletonInput />
      </SkeletonField>
      
      <SkeletonField>
        <SkeletonLabel />
        <SkeletonInput />
      </SkeletonField>
      
      <SkeletonField>
        <SkeletonLabel />
        <SkeletonInput />
      </SkeletonField>
      
      <SkeletonField>
        <SkeletonLabel />
        <SkeletonInput />
      </SkeletonField>
      
      <SkeletonField>
        <SkeletonLabel />
        <SkeletonInput />
      </SkeletonField>
      
      <SkeletonField>
        <SkeletonLabel />
        <SkeletonTextarea />
      </SkeletonField>
      
      <SkeletonInput />
    </SkeletonContainer>
  );
};