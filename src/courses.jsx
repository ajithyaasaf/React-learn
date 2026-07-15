function Courses() {
    const course1 = "HTML"
    const course = "server"
    return (
        <>

            <h1>This is the {course1} course page</h1>
        </>
    )
}

export default Courses


/* notes 
* the {} breace s used to dispaly varible inside jsx
* since jsx cannot directly understanble by borowser it suign tool abale and convert into js and gvive it to the browser 
* and in img tag we should knwo this 
⚠️ A Common Mistake to Avoid:
Do not wrap curly braces in quotes when using them for HTML attributes:

❌ Incorrect: <img src="{logo}" /> (React will treat the source literally as the text code "{logo}")
✅ Correct: <img src={logo} />
* dunction anme first letter captive is naming convention

*/