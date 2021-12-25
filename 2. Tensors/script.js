console.log("____SCALAR____");
tf.scalar(3.4).print();
console.log("____Tensor 1D___");
const tensor1d = tf.tensor1d([1, 2, 3, 4],'int32');
tensor1d.print();
//console.log(tensor1d);

console.log("____Tensor 2D___");
tf.tensor2d([[1, 2], [3, 4]]).print();
console.log("____Tensor 2D (2x2)___");
tf.tensor2d([1, 2, 3, 4], [2, 2]).print();
console.log("____Tensor 2D (4x1)___");
tf.tensor2d([1, 2, 3, 4], [4, 1]).print();
console.log("____Tensor 2D (1x4)___");
tf.tensor2d([1, 2, 3, 4], [1, 4]).print();

console.log("____Tensor 3D___");
tf.tensor3d([[[1], [2]], [[3], [4]]]).print();
console.log("____Tensor 3D (2(group)x2(baris)x1(kolom))___");
tf.tensor3d([1, 2, 3, 4], [2, 2, 1]).print();

console.log("____Tensor 4D___");
tf.tensor4d([[[[1], [2]], [[3], [4]]]]).print();
tf.tensor4d([1, 2, 3, 4], [2, 1, 2, 1]).print();
