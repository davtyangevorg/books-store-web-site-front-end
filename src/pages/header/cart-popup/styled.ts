import styled from "styled-components";

// Styled components
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #666;
  }
`;

// Styled Components
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const CartContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const BookItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`;

export const BookImage = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;

export const BookInfo = styled.div`
  flex: 1;
`;

export const BookTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const BookPrice = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  background: #f3f4f6;
  border: none;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #e5e7eb;
  }
`;

export const QuantityDisplay = styled.span`
  min-width: 2rem;
  text-align: center;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: auto;

  &:hover {
    color: #ef4444;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 2px solid #eee;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #ed8936;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #dd6b20;
  }
`;

export const EmptyCart = styled.p`
  text-align: center;
  color: #666;
  margin-top: 2rem;
`;
