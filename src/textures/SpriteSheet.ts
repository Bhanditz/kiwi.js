


module Kiwi.Textures  {


    export class SpriteSheet extends TextureAtlas{

        constructor(name: string, texture:HTMLImageElement, cellWidth: number, cellHeight: number, numCells?:number,rows?:number,cols?:number,sheetOffsetX?: number, sheetOffsetY?:number,cellOffsetX?:number,cellOffsetY?:number) {
            
            console.log("CH" + cellHeight);            
            
            this.cellWidth = cellWidth;
            this.cellHeight = cellHeight;
            
            this.cols = cols || texture.width / cellWidth;
            this.rows = rows || texture.height / cellHeight;
            this.numCells = numCells || cols * rows;
            
            this.sheetOffsetX = sheetOffsetX || 0;
            this.sheetOffsetY = sheetOffsetY || 0;

            this.cellOffsetX = cellOffsetX || 0;
            this.cellOffsetY = cellOffsetY || 0;
          
            super(name, this.generateAtlasCells(), texture, this.sequences);
        }

        public name: string;
        private cellWidth: number;
        private cellHeight: number;
        private numCells: number;
        private rows: number;
        private cols: number;
        private sheetOffsetX: number;
        private sheetOffsetY: number;
        private cellOffsetX: number;
        private cellOffsetY: number;
        
        public generateAtlasCells(): Array {
            // cell generation goes here
            
            var cells = new Array();
            var cellNumeric: number[] = new Array();

            var dx = this.sheetOffsetX;
            var dy = this.sheetOffsetY;
            var i = 0;
            
            for (var y = 0; y < this.rows; y++) {
                for (var x = 0; x < this.cols; x++) {

                    cells.push({
                        x: dx,
                        y: dy,
                        w: this.cellWidth,
                        h: this.cellHeight,
                        hitboxes: [
                            {
                                x: 0,
                                y: 0,
                                w: this.cellWidth,
                                h: this.cellHeight
                            }
                        ]
                    });

                    cellNumeric.push(i++);

                    dx += this.cellOffsetX + this.cellWidth;
                }
                dx = this.sheetOffsetX;
                dy += this.cellOffsetY + this.cellHeight;
            }

            //generate default sequence
            this.sequences = new Array();
            this.sequences.push(new Kiwi.Sequence('default', cellNumeric)); 

            return cells;
        }

    }

}

