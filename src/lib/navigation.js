import { push } from 'svelte-spa-router'
import { levelCount } from './level'

export function navigateWithViewTransition(to='/') {
    console.log(to)
    // @ts-ignore
    document.startViewTransition(
        () => push(`#/${to}`)
    )
}

export function relativeNavigation(level) {



    return {
        prev: () => navigateWithViewTransition(`levels/${+level - 1}`),
        next: () => navigateWithViewTransition(`levels/${+level + 1}`),
        nextOrEnd: () => (
            level === levelCount
            ? navigateWithViewTransition(`end`) 
            : navigateWithViewTransition(`levels/${+level + 1}`)
        ),
    }
}
