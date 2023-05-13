import styled from 'styled-components'

export const FigureSC = styled.figure`
  gap: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 24px;
  border-radius: 8px;
  border-top: 1px solid ${({ theme }) => theme.GRAY_SCALE[400]};

  padding: 0 0 24px 0;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  > figcaption {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`

export const ImgSC = styled.img`
  width: 3.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
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
