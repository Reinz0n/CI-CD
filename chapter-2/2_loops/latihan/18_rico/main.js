// for loop (output 2)
const starForLoop = (num) => {
  // check input
  try {
    if (typeof num === 'number' && num >= 1) {
      // loop the star
      for (let i = 1; i <= num; i++) {
        console.log(' '.repeat(num - i) + '*'.repeat(i));
      }
    } else {
      throw new Error('Please input an number and not less than 1!');
    }
  } catch (error) {
    console.error(error.message);
  }
};

// while loop (output 3)
const starWhileLoop = (num) => {
  // check input
  try {
    if (typeof num === 'number' && num >= 1) {
      // loop the star
      let i = 1;
      while (i <= num) {
        console.log(' '.repeat(i - 1) + '*'.repeat(num - i + 1));

        // counter
        i++;
      }
    } else {
      throw new Error('Please input an number and not less than 1!');
    }
  } catch (error) {
    console.error(error.message);
  }
};

// do while
const starDoWhileLoop = (num) => {
  // check input
  try {
    if (typeof num === 'number' && num >= 1) {
      // loop the star
      let i = 1;
      do {
        console.log('*'.repeat(i));
        i++;
      } while (i <= num);
    } else {
      throw new Error('Please input an number and not less than 1!');
    }
  } catch (error) {
    console.error(error.message);
  }
};

// recursive (output 1)
const starRecursive = (num) => {
  // check input
  try {
    if (typeof num === 'number') {
      // base case
      if (num === 0) {
        return;
      }

      // recursive case
      console.log('*'.repeat(num));
      starRecursive(num - 1);
    } else {
      throw new Error('Please input an number and not less than 1!');
    }
  } catch (error) {
    console.error(error.message);
  }
};

// call the star func
starRecursive(5);
