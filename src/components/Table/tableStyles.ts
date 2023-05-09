import styled from 'styled-components'

export const DivSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`

export const ParagraphOneDivSC = styled.p`
  gap: 0.625rem;

  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 16.94px;

  color: ${({ theme }) => theme.BLUE_SCALE.blue};
`

export const ParagraphTwoDivSC = styled.p`
  gap: 0.625rem;

  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 16.94px;

  color: ${({ theme }) => theme.PURPLE_SCALE.purple};
`

export const SpanSC = styled.span`
  padding: 0.1875rem 0.5rem;
  border-radius: 62.4375rem;

  color: ${({ theme }) => theme.GRAY_SCALE[100]};
  background-color: ${({ theme }) => theme.GRAY_SCALE[400]};
`

export const ContainerTableSC = styled.div`
  div + div {
    margin-top: 0.75rem;
  }
`

export const DivTableSC = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 1rem;

  max-width: 38.8125rem;

  background-color: ${({ theme }) => theme.GRAY_SCALE[500]};

  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.GRAY_SCALE[400]};
`

export const TableCheckboxSC = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  appearance: none;
  border-radius: 6px;

  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.BLUE_SCALE.blue};
`

export const TableParagraphSC = styled.p<{ isCheck: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  color: ${({ isCheck, theme }) =>
    isCheck ? theme.GRAY_SCALE[300] : theme.GRAY_SCALE[100]};

  text-decoration-line: ${({ isCheck }) => (isCheck ? 'line-through' : 'none')};
`

export const CheckboxInput = styled.div`
  input {
    appearance: none;
  }

  position: relative;

  & > label {
    position: relative;
    display: block;
    cursor: pointer;
    padding-left: 30px;
  }

  & > label > span {
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 17px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.BLUE_SCALE.blue};
  }

  &:hover > label > span {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.BLUE_SCALE.blueDark};
  }

  & > label > input:checked ~ span {
    border: 1px solid ${({ theme }) => theme.PURPLE_SCALE.purpleDark};
    background-color: ${({ theme }) => theme.PURPLE_SCALE.purpleDark};

    &:hover {
      border: 1px solid ${({ theme }) => theme.PURPLE_SCALE.purple};
      background-color: ${({ theme }) => theme.PURPLE_SCALE.purple};
    }
  }

  & > label > span:after {
    content: '';
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 5px;
    height: 8px;
    border-style: solid;
    border-color: white;
    border-image: initial;
    border-width: 0px 2px 2px 0px;
    transform: rotate(45deg);
  }

  & > label > input:checked ~ span:after {
    display: block;
  }
`

export const TableButton = styled.button`
  padding: 1px;
  border: none;
  line-height: 0;
  border-radius: 3px;
  background-color: transparent;
  color: ${({ theme }) => theme.GRAY_SCALE[300]};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.RED_SCALE.danger};
    background-color: ${({ theme }) => theme.GRAY_SCALE[400]};
  }
`
