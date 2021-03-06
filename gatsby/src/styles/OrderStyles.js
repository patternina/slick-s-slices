import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;

    &.order,
    &.menu {
      grid-column: span 1;
    }

    & h3.order-total {
      width: fit-content;
      text-align: center;
      margin: 20px auto 16px auto;
    }

    & .order-cta {
      width: 256px;
      margin: 0 auto;
    }

    & .panal {
      display: none;
    }
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  /* @media(max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  } */
`;

export default OrderStyles;
