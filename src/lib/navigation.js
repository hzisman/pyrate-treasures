import { push } from 'svelte-spa-router'

export function navigateWithViewTransition(to='/') {
    console.log(to)
    // @ts-ignore
    document.startViewTransition(
        () => push(`#/${to}`)
    )
}

export function relativeNavigation(level) {
    return {
        prev: () => navigateWithViewTransition(String(+level - 1)),
        next: () => navigateWithViewTransition(String(+level + 1)),
    }
}
