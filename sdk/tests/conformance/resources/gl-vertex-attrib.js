/*
** Copyright (c) 2015 The Khronos Group Inc.
**
** Permission is hereby granted, free of charge, to any person obtaining a
** copy of this software and/or associated documentation files (the
** "Materials"), to deal in the Materials without restriction, including
** without limitation the rights to use, copy, modify, merge, publish,
** distribute, sublicense, and/or sell copies of the Materials, and to
** permit persons to whom the Materials are furnished to do so, subject to
** the following conditions:
**
** The above copyright notice and this permission notice shall be included
** in all copies or substantial portions of the Materials.
**
** THE MATERIALS ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
** EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
** MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
** IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
** CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
** TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
** MATERIALS OR THE USE OR OTHER DEALINGS IN THE MATERIALS.
*/

// This test relies on the surrounding web page defining a variable
// "contextVersion" which indicates what version of WebGL it's running
// on -- 1 for WebGL 1.0, 2 for WebGL 2.0, etc.

"use strict";
description("This test ensures WebGL implementations vertexAttrib can be set and read.");

debug("");
debug("Canvas.getContext");

var wtu = WebGLTestUtils;
var gl = wtu.create3DContext("canvas");
if (!gl) {
  testFailed("context does not exist");
} else {
  testPassed("context exists");

  debug("");
  debug("Checking gl.vertexAttrib.");

  var numVertexAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
  for (var ii = 0; ii < numVertexAttribs; ++ii) {
    gl.vertexAttrib1fv(ii, [1]);
    shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Float32Array');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '1');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '0');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '0');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

    gl.vertexAttrib2fv(ii, [1, 2]);
    shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Float32Array');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '1');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '2');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '0');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

    gl.vertexAttrib3fv(ii, [1, 2, 3]);
    shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Float32Array');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '1');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '2');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '3');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

    gl.vertexAttrib4fv(ii, [1, 2, 3, 4]);
    shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Float32Array');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '1');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '2');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '3');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '4');

    gl.vertexAttrib1f(ii, 5);
    shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Float32Array');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '5');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '0');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '0');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

    gl.vertexAttrib2f(ii, 6, 7);
    shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Float32Array');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '6');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '7');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '0');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

    gl.vertexAttrib3f(ii, 7, 8, 9);
    shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Float32Array');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '7');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '8');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '9');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '1');

    gl.vertexAttrib4f(ii, 6, 7, 8, 9);
    shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Float32Array');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '6');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '7');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '8');
    shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '9');

    if (contextVersion > 1) {
      gl.vertexAttribI4i(ii, -1, 0, 1, 2);
      shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Int32Array');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '-1');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '0');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '1');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '2');

      gl.vertexAttribI4ui(ii, 0, 1, 2, 3);
      shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Uint32Array');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '0');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '1');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '2');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '3');

      gl.vertexAttribI4iv(ii, [-1, 0, 1, 2]);
      shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Int32Array');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '-1');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '0');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '1');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '2');

      gl.vertexAttribI4uiv(ii, [0, 1, 2, 3]);
      shouldBeType('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)', 'Uint32Array');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[0]', '0');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[1]', '1');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[2]', '2');
      shouldBe('gl.getVertexAttrib(' + ii + ', gl.CURRENT_VERTEX_ATTRIB)[3]', '3');
    }
  }
  wtu.glErrorShouldBe(gl, gl.NO_ERROR);
}

debug("");
var successfullyParsed = true;
