  import React from 'react'

export function LoginForm() {
  return (
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
            <button className="button is-primary is-medium is-fullwidth">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
