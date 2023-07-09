const queryString = {
  parse: (q:string):Record<string, string> => {
    const entries = new URLSearchParams(q).entries()
    return Array.from(entries).reduce((obj, e) => ({ ...obj, [e[0]]: e[1] }), {})
  }
}

export default queryString
