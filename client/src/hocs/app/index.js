// react hot loader
import { hot } from 'react-hot-loader/root'
// react
import React from "react"

import { wrappers } from "./wrappers"

const wrapApp = (App) => wrappers.reduce((App, wrapper) => wrapper(App), App)

export default wrapApp