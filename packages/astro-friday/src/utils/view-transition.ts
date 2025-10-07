import type { TransitionBeforeSwapEvent } from 'astro:transitions/client'

/**
 * A utility function to execute a callback that compatibly with Astro's view transitions.
 *
 * @param callback A callback function that receives the current document object.
 *
 * @see https://docs.astro.build/en/guides/view-transitions/#script-behavior-with-view-transitions
 */
export function withViewTransition(callbacks: {
  initial?: (state: WithViewTransitionState) => void
  beforeSwap?: (state: WithViewTransitionState, event: TransitionBeforeSwapEvent) => void
  done?: (state: WithViewTransitionState) => void
} = {}) {
  const {
    initial,
    beforeSwap,
    done,
  } = callbacks

  const state: WithViewTransitionState = {
    document,
  }

  initial?.(state)

  state.document.addEventListener('astro:before-swap', (event) => {
    state.document = event.newDocument
    beforeSwap?.(state, event)

    event.viewTransition.updateCallbackDone.then(() => {
      state.document = document
      done?.(state)
    })
  })
}

export interface WithViewTransitionState {
  document: Document
}
