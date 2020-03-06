function areThereDuplicates(...ar){
        let freqCount1={};
        for(let key of ar){
            freqCount1[key]= ++freqCount1[key] || 1;
        }
        console.log(freqCount1);
        for(let key in freqCount1){
            if(freqCount1[key]>1){
                return true;
            }
        }
        return false;
    }

    console.log(areThereDuplicates(1,2,1));
