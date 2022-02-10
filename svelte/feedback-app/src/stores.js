import { writable } from 'svelte/store'

export const FeedbackStore = writable(
    [
        {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            rating: 9,
            text: 'Consequat ac felis donec et odio pellentesque diam volutpat commodo.'
        },
        {
            id: 3,
            rating: 8,
            text: 'Fermentum leo vel orci porta.'
        }
    ]
)