
export default function Input({handleInputText, userUserInputText}){

    return(
        <input style={{filter : userUserInputText == '' ? 'opacity(1)' : ''}} className='input-box' type="text" placeholder="Write some text... & then scroll down" name="" onChange={(el) => handleInputText(el.target.value)} id="" />
    )
}