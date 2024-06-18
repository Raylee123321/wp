function arrayMin(a)
{
    let i,min=a[0];
    for (i=1 ; i<a.length ; i++)
    {
        if (a[i]<min) min=a[i];
    }
    console.log(min);
}

arrayMin([4,5,6,7,8]);
arrayMin([25,17,67,47,99]);