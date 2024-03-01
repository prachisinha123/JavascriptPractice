let count =  0;
let apiCalled;
const throttle = (fn,time)=>{
    if(apiCalled) return;
    apiCalled = true;
    setTimeout(()=>{
        fn();
        apiCalled = false;
    },time);
};
const sendEmail = () =>{
    throttle(()=>{
    console.log('sending email',count++)},500)

}

  






// Here we are having a button,and onclicking that button , we are calling 'sendEmail function', and 
// in sendEmail function there is simply console.log() statement,and when we click on this buuton,there is log in colsole.
// We want to send email to me , whenever the user will click on it.
// consider this log statement as an API,which is sending the email.
// Now if we click then there is lot of email in the mail inbox, on every click. So we have to get rid of this spam.
// So to get rid of this spam,we can throttle this button, which means:
// after clicking on the button 'sendEmail', we will dealy the api call, by some milliseconds, for eg:500ms
// and if there is again call under 500 ms , then we reject that call