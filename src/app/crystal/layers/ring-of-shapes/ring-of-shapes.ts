import * as p5 from 'p5';

import * as shapes from '@crystal-creator/p5/shapes';
import * as utils from '@crystal-creator/p5/utils';
import {RenderableLayer} from '../base-layer';

export interface RingOfShapesLayer extends RenderableLayer {
  shapeSides: number;
  stepSize: number;
  maxSteps: number;
  radius: number;
  center: number;
  rotation?: number;
}

export class RingOfShapes implements RingOfShapesLayer {
  name: string = 'ring-of-shapes';
  sides: number = NaN;
  fillColor: string = 'black';
  strokeColor: string = 'black';
  strokeWeight: number = 1;
  size: number = 500;

  radius: number;
  center: number;
  shapeSides: number;
  stepSize: number = 1;
  maxSteps: number = 8;
  rotation: number = 0;

  constructor(params?: Partial<RingOfShapesLayer>) {
    this.sides = params?.sides ?? this.sides;
    this.fillColor = params?.fillColor ?? this.fillColor;
    this.strokeColor = params?.strokeColor ?? this.strokeColor;
    this.strokeWeight = params?.strokeWeight ?? this.strokeWeight;
    this.size = params?.size ?? this.size;

    this.radius = params?.radius;
    this.maxSteps = params?.maxSteps ?? this.maxSteps;
    this.stepSize = params?.stepSize ?? this.stepSize;
    this.shapeSides = params?.shapeSides;
    this.center = params?.center;
    this.rotation = params?.rotation ?? this.rotation;
  }

  render = (sketch: p5) => {
    const halfSize = this.size / 2;
    const quarterSize = halfSize / 2;
    const eighthSize = quarterSize / 2;
    this.radius = this.radius ?? sketch.floor(
      sketch.random(eighthSize, quarterSize));
    this.center = this.center ?? sketch.floor(
      sketch.random(this.radius, halfSize - this.radius));
    const angle = 360 / this.sides;
    this.shapeSides = this.shapeSides ?? sketch.floor(sketch.random(7));

    sketch.noFill();
    sketch.stroke(utils.getColor(sketch, this.strokeColor));
    sketch.strokeWeight(this.strokeWeight);
    sketch.push();
      sketch.translate(sketch.width/2, sketch.height/2);
      for (let i = 0; i < this.sides; i++) {
        shapes.drawShape(sketch, this.shapeSides, 0, this.center, this.radius, this.rotation);
        sketch.rotate(angle);
      }
    sketch.pop();
  };
}