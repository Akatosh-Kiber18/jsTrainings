class Rectangle {
    width
    height

    constructor(w, h) {
        this.width = w
        this.height = h
    }

    calcArea() {
        return this.width * this.height
    }
}

rect = new Rectangle(5,15)

console.log(rect.calcArea())

/*
function tribonacci(signature, n) {
    let res = []
    if (n < 3) {
        return signature.slice(0, 2)
    } else {
        res.push(...signature)
        for (let i = 3; i < n; i++) {
            res[i] = res[i - 3] + res[i - 2] + res[i - 1]
        }
        return res
    }
}
*/

/*
const threeSum = function(nums) {
    let n = nums.length;
    if( n < 3 ) return [];
    let ans = [];
    let i, l, r;
    let k;

    nums.sort( (a,b) => (a-b) );

    for( i=0; i<n; i++ ) {
        if( i>0 && nums[i] === nums[i-1] ) continue;

        l = i+1;
        r = n-1;

        while( l < r ) {
            k = nums[i] + nums[l] + nums[r];
            if( k < 0 ) {
                l++;
            } else if( k > 0 ) {
                r--;
                while( nums[r] === nums[r+1] && l<r )
                    r--;
            } else {
                ans.push([nums[i],nums[l],nums[r]]);
                l++;
                while( nums[l] === nums[l-1] && l<r )
                    l++;
            }
        }
    }
    return ans;
};
*/

/*
let romanToInt = (s) => {

    const map = new Map()
    map.set('I', 1)
    map.set("IV", 4)
    map.set("V", 5)
    map.set("IX", 9)
    map.set("X", 10)
    map.set("XL", 40)
    map.set("L", 50)
    map.set("XC", 90)
    map.set("C", 100)
    map.set("CD", 400)
    map.set("D", 500)
    map.set("CM", 900)
    map.set("M", 1000)

    let arrS = s.split("")
    let result = 0;

    for (let i = 0; i < arrS.length; i++) {
        if (map.has(arrS[i] + arrS[i + 1])) {
            result += map.get(arrS[i] + arrS[i + 1])
            i++
        } else if (map.has(arrS[i])) {
            result+= map.get(arrS[i])
        }
    }
    return result;
}*/
