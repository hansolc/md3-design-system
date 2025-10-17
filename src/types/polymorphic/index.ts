import type { ComponentPropsWithoutRef } from 'react'

// 기존 작성한 ViewProps에서 as를 분리한다.
interface AsProp<T extends React.ElementType> {
  as?: T
}

// 직관적인 이름을 붙여서 타입으로 만들어준다.
export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref']

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P)

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {},
> = AsProp<T> & Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>> & Props
