import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 5rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
`

export const Description = styled.span`
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
`
export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
