function storeValues() {
    
    let p = parseFloat(document.getElementById('p').value);
    let a = parseFloat(document.getElementById('a').value);
    let l = parseFloat(document.getElementById('l').value);

   
    
    let b = l-a 
    if(l !=0 & l>a & p>0 & a>0 & l>0 )  {
        let upper_shear = (p* b) / l
    let lower_shear = (-1 * p * a ) /l 

   
  
    const xArray = [0,0,a,a,a,l,l];
    const yArray =  [0,upper_shear,upper_shear,0,lower_shear,lower_shear,0];

   
    const data = [{
    x: xArray,
    y: yArray,
    mode:"lines+markers"
    }];
    


    
    const layout = {
    xaxis: {range: [0, l+10], title: " "},
    yaxis: {range: [lower_shear -10,upper_shear+5], title: "Shear Force"},  
    title: "Shear Force Diagram(SFD)",
    plot_bgcolor:'#00cada',
   
    };

    
    Plotly.newPlot("myPlot", data, layout);

    }
    else{
        document.getElementById('Error').textContent='ERROR'
    }
    

}


document.getElementById('SFD').addEventListener('click', storeValues);


function graph_BMD(){
    let p = parseFloat(document.getElementById('p').value);
    let a = parseFloat(document.getElementById('a').value);
    let l = parseFloat(document.getElementById('l').value);

    let b = l-a;
    if(l !=0 & l>a & p>0 & a>0 & l>0 )  {
    let max_moment = (p* a* b) /l;


    const xAxis = [0,a,l];
    const yAxis =  [0,max_moment,0];

   
    const data_moment = [{
    x: xAxis,
    y: yAxis,
    mode:"lines+markers"
    
    }];
    


    
    const layout_moment = {
    xaxis: {range: [0, l+10], title: " "},
    yaxis: {range: [0,max_moment+20], title: "Bending Moment"},  
    title: "Bending Moment Diagram (BMD)",
    plot_bgcolor:'#00cada',
   
    };

    
    Plotly.newPlot("Plot_Moment", data_moment, layout_moment);
    }
    else{
        document.getElementById('Error').textContent='ERROR'
    }

}


document.getElementById('BMD').addEventListener('click', graph_BMD);


function specificPoint(){
    let p = parseFloat(document.getElementById('p').value);
    let a = parseFloat(document.getElementById('a').value);
    let l = parseFloat(document.getElementById('l').value);
    let x=parseFloat(document.getElementById('ppa').value);

    let b = l-a;
    if(l !=0 & l>a & p>0 & a>0 & l>0 & x>0 & b>0)  {
        if(0<x & x<=a){
            sfd = (p*b)/l
            bmd =(p*b*x)/l

            document.getElementById('results').innerHTML=`For the given point, SFD : ${sfd} ,BMD ${bmd}`
            
        }
        else if(a<x &  x<=l){
            sfd = (-1 *p*a)/l
            bmd =(-1* p * a* x)/l + p * a

            document.getElementById('results').innerHTML=`For the given point, SFD : ${sfd} ,BMD ${bmd}`
            

        }
        else if (x=0){
            sfd=0
            bmd=0
            document.getElementById('results').innerHTML=`For the given point, SFD : ${sfd} ,BMD ${bmd}`
        }
        else if(x=a){
            sfd=(p*b)/l
            bmd=(p*b*a)/l
            document.getElementById('results').innerHTML=`For the given point, SFD : ${sfd} ,BMD ${bmd}`
        }
        else if(x=l){
            sfd=0;
            bmd=0;
            document.getElementById('results').innerHTML=`For the given point, SFD : ${sfd} ,BMD ${bmd}`
        }
        else{
            document.getElementById('error_ppa').innerHTML="Error"
        }
    }
    else{
        document.getElementById('error_ppa').innerHTML="Error"
    }

}


document.getElementById('Submit').addEventListener('click',specificPoint);


function comparsion(){
    let p = parseFloat(document.getElementById('p').value);
    let a = parseFloat(document.getElementById('a').value);
    let l = parseFloat(document.getElementById('l').value);
    let a_prime=parseFloat(document.getElementById('var_inp').value);


    let b = l-a 
    let b_prime = l-a_prime
    if(l !=0 & l>a & p>0 & a>0 & l>0 & a_prime >0 & l>a_prime)  {
        let upper_shear = (p* b) / l
        let lower_shear = (-1 * p * a ) /l 
        let upper_shear_prime=(p*b_prime)/l
        let lower_shear_prime=(-1 * p * a_prime ) /l 

   
    
        const xArray = [0,0,a,a,a,l,l];
        const yArray =  [0,upper_shear,upper_shear,0,lower_shear,lower_shear,0];

        const x_prime=[0,0,a_prime,a_prime,a_prime,l,l];
        const y_prime = [0,upper_shear_prime,upper_shear_prime,0,lower_shear_prime,lower_shear_prime,0];
    
        var trace1 = {
        x: xArray,
        y: yArray,
        mode:"lines+markers",
        name:`Value of a is ${a}`,
        line: {
            color: '#0051a0',
            width: 3
          }
        };
        
        var trace2 ={
            x:x_prime,
            y:y_prime,
            mode:"lines+markers",
            name:`Value of a is ${a_prime}`,
            line: {
                color:'black',
                width: 3
              }
        }
        
        var data=[trace1,trace2]

        
        const layout = {
         
            title: "Variation of Shear Force Diagram(SFD)",
            plot_bgcolor:'#00cada',
    
        };

        
        Plotly.newPlot("Plot_SFD_Comparison", data, layout);

    }
    else{
        document.getElementById('Error').textContent='ERROR'
    }
    

}

document.getElementById('var_click_sfd').addEventListener("click",comparsion)




function graph_comparison_BMD(){
    let p = parseFloat(document.getElementById('p').value);
    let a = parseFloat(document.getElementById('a').value);
    let l = parseFloat(document.getElementById('l').value);
    let a_prime=parseFloat(document.getElementById('var_inp').value);
    
    let b = l-a;
    let b_prime=l-a_prime

    if(l !=0 & l>a & p>0 & a>0 & l>0 & a_prime>0 & l> a_prime)  {
    let max_moment = (p* a* b) /l;
    let max_moment_prime=(p*a_prime*b_prime)/l


    const xAxis = [0,a,l];
    const yAxis =  [0,max_moment,0];
    const x_prime=[0,a_prime,l]
    const y_prime=[0,max_moment_prime,0]
   
    const trace1 = {
    x: xAxis,
    y: yAxis,
    mode:"lines+markers",
    name:`Value of a is ${a}`,
    line: {
            color: '#0051a0',
            width: 3
          }
    };

    const trace2={
        x:x_prime,
        y:y_prime,
        mode:"lines+markers",
        name:`Value of a is ${a_prime}`,
        line: {
                color: 'black',
                width: 3
            }
    }
    

    var data_moment=[trace1,trace2]
    
    const layout_moment = {
   
    title: "Variation of Bending Moment Diagram (BMD)",
    plot_bgcolor:'#00cada',
   
    };

    
    Plotly.newPlot("Plot_BMD_Comparison", data_moment, layout_moment);
    }
    else{
        document.getElementById('Error').textContent='ERROR'
    }

}


document.getElementById('var_click_bmd').addEventListener("click",graph_comparison_BMD)
