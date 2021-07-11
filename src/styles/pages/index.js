import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  box-sizing: border-box;

  .management {
    margin: 0 0.5rem;
  }

  .management .title {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const ModalCustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
