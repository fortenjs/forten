import { build, settings } from '@forten/build'
import * as React from 'react'
import { expect, it, testRender } from 'test'
import { theme } from '../index.js'
import { defaultTheme } from '../themes/index.js'
import { ThemeSettings } from '../types.js'
import { DirectThemeProvider, ThemeProvider } from './ThemeProvider.js'

const main = {
  name: 'main',
  settings: settings<ThemeSettings>({
    theme: {
      default: { thisWidth: '12px' },
    },
  }),
}

const app = build(main).using(theme).app()

describe('ThemeProvider', () => {
  it('should render children', () => {
    expect(
      testRender(app, <ThemeProvider scopeName="foo">foobar</ThemeProvider>)
    ).toMatchSnapshot()
  })
})

describe('DirectThemeProvider', () => {
  it('should render with provided theme and scopeName', () => {
    expect(
      testRender(
        <DirectThemeProvider scopeName="bar" theme={defaultTheme}>
          foobar
        </DirectThemeProvider>
      )
    ).toMatchSnapshot()
  })
  it('should render with provided theme and default scopeName', () => {
    expect(
      testRender(
        <DirectThemeProvider theme={defaultTheme}>foobar</DirectThemeProvider>
      )
    ).toMatchSnapshot()
  })
})
