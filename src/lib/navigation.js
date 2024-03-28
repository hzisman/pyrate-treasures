import { navigate } from "svelte-routing"

export function navigateWithViewTransition(to='/') {
    // @ts-ignore
    document.startViewTransition(
        () => navigate(to)
    )
}

export function relativeNavigation(level) {
    return {
        prev: () => navigateWithViewTransition(String(+level - 1)),
        next: () => navigateWithViewTransition(String(+level + 1)),
    }
}
