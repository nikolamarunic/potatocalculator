const defaultState = {
    holdings: [{ name: 'CDN-B', allocation: 20, id: 1 }, { name: 'CDN', allocation: 26, id: 2 },
    { name: 'USA', allocation: 27, id: 3 }, { name: 'INTL', allocation: 27, id: 4 }],

    accounts: [{ name: 'CAD CASH', values: { 'CDN-B': 100, 'CDN': 200, 'USA': 300, 'INTL': 200 }, id: 1, limit: -1 },
    { name: 'CAD TFSA', values: { 'CDN-B': 500, 'CDN': 600, 'USA': 700, 'INTL': 400 }, id: 2, limit: 0 },
    { name: 'CAD RRSP', values: { 'CDN-B': 900, 'CDN': 1000, 'USA': 700, 'INTL': 1700 }, id: 3, limit: 0 }
    ],
    changes: [
        { name: 'CAD CASH', values: { 'CDN-B': 0, 'CDN': 0, 'USA': 0, 'INTL': 0 } },
        { name: 'CAD TFSA', values: { 'CDN-B': 0, 'CDN': 0, 'USA': 0, 'INTL': 0 } },
        { name: 'CAD RRSP', values: { 'CDN-B': 0, 'CDN': 0, 'USA': 0, 'INTL': 0 } },
    ],
    signedIn: false
}

export default defaultState;