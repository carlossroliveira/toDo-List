import styled from 'styled-components'

export const DivSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const FigureSC = styled.figure`
  gap: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 24px;
  border-radius: 8px;
  border-top: 1px solid ${({ theme }) => theme.GRAY_SCALE[400]};

  padding: 0 0 24px 0;
`

export const ImgSC = styled.img`
  width: 3.5rem;
  margin-top: 4rem;
`

export const ParagraphOneSC = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 22.4px;

  color: ${({ theme }) => theme.GRAY_SCALE[300]};
`

export const ParagraphTwoSC = styled.p`
  font-size: 1rem;

  color: ${({ theme }) => theme.GRAY_SCALE[300]};
`
