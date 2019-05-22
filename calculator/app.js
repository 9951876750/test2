
      function validate() {
         var one = document.getElementById("one").value;
         var two = document.getElementById("two").value;
         var three = document.getElementById("three").value;
         var four = document.getElementById("four").value;
      var msg = "";
      if(one=="")
      {
          msg += "Name should not be empty \n";
      }
      // else
      // {
      //     msg += one + "\n"
      // }
   
      if(two=="")
      {
          msg += "EMail should not be empty \n";
      }
      // else
      // {
      //     msg += two + "\n"
      // }
   
      if(three=="")
      {
          msg += "Zip Code should not be empty \n";
      }
      // else
      // {
      //     msg += three + "\n"
      // }
      
      if(four=="")
      {
          msg += "Country should not be empty \n";
      }
      // else
      // {
      //     msg += four + "\n"
      // }
   alert(msg);
      //    if( document.myForm.Name.value == "" ) {
      //       alert( "Please provide your name!");
      //       document.myForm.Name.focus() ;
      //       return false;
      //    }
      //   //  else {
      //   //      alert("Name");
      //   //  }
      //    if( document.myForm.EMail.value == "" ) {
      //       alert( "Please provide your Email!");
      //       document.myForm.EMail.focus() ;
      //       return false;
      //    }
      //   //  else {
      //   //      alert("EMail");
      //   //  }
      //    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
      //       document.myForm.Zip.value.length != 5 ) {
            
      //       alert( "Please provide a zip Code" );
      //       document.myForm.Zip.focus() ;
      //       return false;
      //    }
      //   //  else{
      //   //      alert("Zip");
      //   //  }
      //    if( document.myForm.Country.value == "-1" ) {
      //       alert("Please provide your country!");
      //       return false;
      //    }
      //   //  else {
      //   //      alert("Country");
      //   //  }
      //   // alert(Name + "\n" + EMail + "\n" + Zip + "\n" + Country);
      //    return( true );
      }

