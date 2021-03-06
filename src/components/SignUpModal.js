import React, {useContext, useRef, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

export default function SignUpModal() { // INSCRIPTION

  const [validation, setValidation] = useState("");

  const {modalState, toggleModals, signUp} = useContext(UserContext)

  const navigate = useNavigate();

  const inputs = useRef([])

  const addInputs = el => {
    if(el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 caractère minimum")
      return;
    }
    else if(inputs.current[1].value != inputs.current[2].value) {
      setValidation("les mots de passe ne sont pas identiques")
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      formRef.current.reset();
      setValidation("")
      toggleModals("close")
      navigate("/private/private-home")

    } catch (err) {
      if(err.code === "auth/invalid-email") {
        setValidation("Format de l'email ")
      }

      if(err.code === "auth/email-already-in-use") {
        setValidation("Email déjà utilisé")
      }
    }

  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
    {modalState.signUpModal && (
      <div className='position-fixed top-0 vw-100 vh-100'>
        <div
        onClick={() => toggleModals("close")}
        className='w-100 h-100 bg-dark bg-opacity-75'>
        </div>
          <div className='position-absolute top-50 start-50 translate-middle'
          style={{minWidth: '400px'}}>
            <div className="modal-dialog">

              <div className="modal-content">
                <div className="modal-header">
                  <h5 className='modal-title'>Inscrivez-vous</h5>
                  <button
                  onClick={() => toggleModals("close")}
                  className='btn-close'></button>
                </div>

                <div className='modal-body'>
                  <form className='sign-up-form' onSubmit={handleForm} ref={formRef}>
                    <div className='mb-3'>
                      <label htmlFor='signUpEmail' className='form-label'>Adresse mail</label>
                      <input
                      ref={addInputs}
                      name='email'
                      required
                      type="email"
                      className='form-control'
                      id='signUpEmail' />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='signUpPwd' className='form-label'>Mot de passe</label>
                      <input
                      ref={addInputs}
                      name='pwd'
                      required
                      type="password"
                      className='form-control'
                      id='signUpPwd' />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='repeatPwd' className='form-label'>Repéter le mot de passe</label>
                      <input
                      ref={addInputs}
                      name='pwd'
                      required
                      type="password"
                      className='form-control'
                      id='repeatPwd' />
                      <p className='text-danger mt-1'>{validation}</p>
                    </div>

                    <button className='btn btn-primary'>Valider</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    )}
    </>
  )
}
