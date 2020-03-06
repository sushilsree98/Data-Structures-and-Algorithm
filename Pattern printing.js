let n=9;
    let cnt1=n;
    let ar1=[],mainAr=[];
    for(let i=0;i<n;i++){
        for(let j=i;j<(2*n-1-i);j++){
            if(ar1.length>(2*n-1)){
                ar1.push(cnt1)
            }else{
                ar1[j]=cnt1;
            }
        }
         mainAr.push(ar1.join(" "));
        cnt1--;
        console.log(ar1.join(" "));
    }
    mainAr.pop();
    for(let i=mainAr.length-1;i>=0;i--){
        console.log(mainAr[i]);
    }
