import React from 'react'
import { render } from 'react-native-testing-library'
import { Columns, Column, ResponsiveProp } from '../src'

import {
  Placeholder,
  flattenStyle,
  flattenChildrenStyle,
  resizeToTablet,
  resizeToDesktop,
} from './utils'

describe('Columns', () => {
  const inspectMarginFactory = (space?: ResponsiveProp<number>) => (margin: number) => {
    const { toJSON } = render(
      <Columns space={space}>
        <Column>
          <Placeholder />
        </Column>
        <Column>
          <Placeholder />
        </Column>
        <Column>
          <Placeholder />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const [column1, column2, column3] = flattenChildrenStyle(root)
    const noMargin = { marginRight: 0 }
    const withMargin = { marginRight: margin }

    expect(column1).toMatchObject(withMargin)
    expect(column2).toMatchObject(withMargin)
    expect(column3).toMatchObject(noMargin)
  }

  it('should distribute content horizontally', () => {
    const { toJSON } = render(
      <Columns>
        <Column>
          <Placeholder />
        </Column>
        <Column>
          <Placeholder />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toEqual({
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      width: '100%',
    })
  })

  it('should set proper flex value', () => {
    const { toJSON } = render(
      <Columns>
        <Column width="content">
          <Placeholder width={20} />
        </Column>
        <Column width="1/2">
          <Placeholder />
        </Column>
        <Column width="1/3">
          <Placeholder />
        </Column>
        <Column width="1/4">
          <Placeholder />
        </Column>
        <Column width="1/5">
          <Placeholder />
        </Column>
        <Column width="2/3">
          <Placeholder />
        </Column>
        <Column width="2/5">
          <Placeholder />
        </Column>
        <Column width="3/4">
          <Placeholder />
        </Column>
        <Column width="3/5">
          <Placeholder />
        </Column>
        <Column width="4/5">
          <Placeholder />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const [
      column1,
      column2,
      column3,
      column4,
      column5,
      column6,
      column7,
      column8,
      column9,
      column10,
    ] = flattenChildrenStyle(root)

    expect(column1).toMatchObject({ flex: 0, flexShrink: 1 })
    expect(column2).toMatchObject({ flexBasis: '50%', flexShrink: 1 })
    expect(column3).toMatchObject({ flexBasis: '33%', flexShrink: 1 })
    expect(column4).toMatchObject({ flexBasis: '25%', flexShrink: 1 })
    expect(column5).toMatchObject({ flexBasis: '20%', flexShrink: 1 })
    expect(column6).toMatchObject({ flexBasis: '66%', flexShrink: 1 })
    expect(column7).toMatchObject({ flexBasis: '40%', flexShrink: 1 })
    expect(column8).toMatchObject({ flexBasis: '75%', flexShrink: 1 })
    expect(column9).toMatchObject({ flexBasis: '60%', flexShrink: 1 })
    expect(column10).toMatchObject({ flexBasis: '80%', flexShrink: 1 })
  })

  it('should display correct number of columns', () => {
    const { toJSON } = render(
      <Columns>
        <Column>
          <Placeholder />
        </Column>
        <Column>
          <Placeholder />
        </Column>
        <Column>
          <Placeholder />
        </Column>
        <Column>
          <Placeholder />
        </Column>
      </Columns>,
    )
    const root = toJSON()

    expect(root.children).toHaveLength(4)
  })

  it('should center columns vertically', () => {
    const { toJSON } = render(
      <Columns alignY="center">
        <Column>
          <Placeholder height={80} />
        </Column>
        <Column>
          <Placeholder height={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ alignItems: 'center' })
  })

  it("should align columns to the start of the container's cross-axis", () => {
    const { toJSON } = render(
      <Columns alignY="top">
        <Column>
          <Placeholder height={80} />
        </Column>
        <Column>
          <Placeholder height={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ alignItems: 'flex-start' })
  })

  it("should align columns to the end of the container's cross-axis", () => {
    const { toJSON } = render(
      <Columns alignY="bottom">
        <Column>
          <Placeholder height={80} />
        </Column>
        <Column>
          <Placeholder height={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ alignItems: 'flex-end' })
  })

  it("should align columns to the start of the container's main axis", () => {
    const { toJSON } = render(
      <Columns alignX="left">
        <Column width="content">
          <Placeholder width={80} />
        </Column>
        <Column width="content">
          <Placeholder width={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ justifyContent: 'flex-start' })
  })

  it("should align columns to the end of the container's main axis", () => {
    const { toJSON } = render(
      <Columns alignX="right">
        <Column width="content">
          <Placeholder width={80} />
        </Column>
        <Column width="content">
          <Placeholder width={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ justifyContent: 'flex-end' })
  })

  it('should center columns horizontally', () => {
    const { toJSON } = render(
      <Columns alignX="center">
        <Column width="content">
          <Placeholder width={80} />
        </Column>
        <Column width="content">
          <Placeholder width={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ justifyContent: 'center' })
  })

  it('should distribute the remaining space between columns horizontally', () => {
    const { toJSON } = render(
      <Columns alignX="between">
        <Column width="content">
          <Placeholder width={80} />
        </Column>
        <Column width="content">
          <Placeholder width={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ justifyContent: 'space-between' })
  })

  it('should distribute the remaining space around columns horizontally', () => {
    const { toJSON } = render(
      <Columns alignX="around">
        <Column width="content">
          <Placeholder width={80} />
        </Column>
        <Column width="content">
          <Placeholder width={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ justifyContent: 'space-around' })
  })

  it('should distribute columns evenly horizontally', () => {
    const { toJSON } = render(
      <Columns alignX="evenly">
        <Column width="content">
          <Placeholder width={80} />
        </Column>
        <Column width="content">
          <Placeholder width={140} />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const style = flattenStyle(root)

    expect(style).toMatchObject({ justifyContent: 'space-evenly' })
  })

  it('should add no right margin to children components if `space` is not passed', () => {
    const inspectMargin = inspectMarginFactory()
    inspectMargin(0)
  })

  it('should add no right margin to children components if `space` equals 0', () => {
    const inspectMargin = inspectMarginFactory(0)
    inspectMargin(0)
  })

  it('should add proper right margin to children components if `space` is greater than 0', () => {
    const inspectMargin = inspectMarginFactory(2)
    inspectMargin(8)
  })

  it('should handle multiple Columns components', () => {
    const { toJSON } = render(
      <Columns space={8}>
        <Column>
          <Columns space={2}>
            <Column>
              <Placeholder />
            </Column>
            <Column>
              <Placeholder />
            </Column>
          </Columns>
        </Column>
        <Column>
          <Placeholder />
        </Column>
      </Columns>,
    )
    const root = toJSON()
    const [column1] = root.children
    const [rootColumn1, rootColumn2] = flattenChildrenStyle(root)
    const [innerColumns] = column1.children
    const [innerColumn1, innerColumn2] = flattenChildrenStyle(innerColumns)

    expect(rootColumn1).toMatchObject({ marginRight: 32 })
    expect(rootColumn2).toMatchObject({ marginRight: 0 })

    expect(innerColumn1).toMatchObject({ marginRight: 8 })
    expect(innerColumn2).toMatchObject({ marginRight: 0 })
  })

  it('should handle tablet screen size upwards', () => {
    const inspectMargin = inspectMarginFactory([1, 3])

    inspectMargin(4)
    resizeToTablet()
    inspectMargin(12)
    resizeToDesktop()
    inspectMargin(12)
  })

  it('should handle desktop screen size', () => {
    const inspectMargin = inspectMarginFactory([1, 3, 5])

    inspectMargin(4)
    resizeToTablet()
    inspectMargin(12)
    resizeToDesktop()
    inspectMargin(20)
  })
})
