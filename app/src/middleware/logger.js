const logger = state => next => action =>{
    console.group(action.type)
    console.info('dispacthing', action)
    let result = next(action)
    console.log('next state', state.getState())
    console.groupEnd()
    return result
}

export default logger