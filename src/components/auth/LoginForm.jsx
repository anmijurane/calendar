  import React from 'react'

export function LoginForm() {

  const hadleSubmitLogin = ( event ) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    console.log( {username, password} )

  }

  return (
    <form onSubmit={ hadleSubmitLogin } >
      <div className="box">
        <div className="field">
          <label htmlFor="username_login" className='label is-uppercase'>Username</label>
          <div className="control">
            <input type="text" className="inpt is-primary" />
          </div>
          <p className="help"></p>
        </div>
        
        <div className="field">
          <label htmlFor="username_login" className='label is-uppercase' >Password</label>
          <div className="control">
            <input type="text" className="inpt is-primary" />
          </div>
          <p className="help"></p>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <div className="buttons">
              <button
                className="button is-primary is-medium is-fullwidth"
                type='submit'
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
