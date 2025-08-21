import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const SkeletonField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkeletonLabel = styled.div`
  height: 20px;
  width: 120px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 4px;
`;

export const SkeletonInput = styled.div`
  height: 48px;
  width: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 8px;
`;

export const SkeletonTextarea = styled(SkeletonInput)`
  height: 120px;
`;

export const SkeletonTitle = styled.div`
  height: 28px;
  width: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 4px;
  margin-bottom: 16px;
`;