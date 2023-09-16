'use client'

import * as S from './Main.styles'

export function Main({
  title = 'Boilerplate V2',
  description = 'boilerplate created with NextJS, App Router, Storybook, Jest, Husky'
}) {
  return (
    <S.Container>
      <S.Logo
        src="/img/icon-192.png"
        alt="Imagem de um átomo e Boilerplate v2 escrito em baixo."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Container>
  )
}
