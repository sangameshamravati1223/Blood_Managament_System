function mapBloodGroup(bloodgroup){
    if(bloodgroup === 'O+')
    {
        return 1;
    }
    else if(bloodgroup === 'O-')
    {
        return 2;
    }
    else if(bloodgroup === 'A+')
    {
        return 3;
    }
    else if(bloodgroup === 'A-')
    {
        return 4;
    }
    else if(bloodgroup === 'B+')
    {
        return 5;
    }
    else if(bloodgroup === 'B-')
    {
        return 6;
    }
    else if(bloodgroup === 'AB+')
    {
        return 7;
    }
    else if(bloodgroup === 'AB-')
    {
        return 8;
    }
   
  }

  module.exports =  { mapBloodGroup };