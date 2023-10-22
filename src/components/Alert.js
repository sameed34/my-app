import React from 'react'

export default function Alert(props) {
    const cap=(word)=>{
        const w=word.toLowerCase();
        return w.charAt(0).toUpperCase()+ w.slice(1);
      }
  return (
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show" role="alert`}>
<strong>{cap(props.alert.type)}</strong>: {props.alert.message}
<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
