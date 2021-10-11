const debug = process.env.REACT_APP_APP_DEBUG;

export const log = (event,message) => {
  if (debug) {
    console.log({ event, message } );
   }
}
