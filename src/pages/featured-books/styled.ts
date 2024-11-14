import { Loader } from "lucide-react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 80%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

export const BookCard = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BookImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  max-height: 100px;
`;

export const BookTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const BookAuthor = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const BookPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
  background-color: #ff6128;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6128;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  margin: 0 4px;
  background-color: ${(props) => (props.$isActive ? "#ff6128" : "white")};
  color: ${(props) => (props.$isActive ? "white" : "#333")};
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#0056b3" : "#f0f0f0")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SkeletonCard = styled.div`
  background: #f0f0f0;
  border-radius: 4px;
  height: 300px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

export const SkeletonImage = styled.div`
  background: #e0e0e0;
  height: 150px;
  margin-bottom: 1rem;
`;

export const SkeletonText = styled.div`
  background: #e0e0e0;
  height: 1rem;
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const SkeletonButton = styled.div`
  background: #e0e0e0;
  height: 2rem;
  margin-top: 1rem;
`;

export const LoadingSpinner = styled(Loader)`
  width: 100%;
  height: 100%;
`;
