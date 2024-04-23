import Stack from "./stack";

class UndoManager {

    constructor() {
        this.redoStack = new Stack();
        this.undoStack = new Stack();
    }

    canUndo() {
        if (this.undoStack.isEmpty()) {
            return false;
        } else {
            return true;
        }
    }

    canRedo() {
        if (this.redoStack.isEmpty()) {
            return false;
        } else {
            return true;
        }
    }

    executeCommand(commande) {
        commande.execute();
        this.undoStack.push(commande);
    }

    undo() {
        if (this.canUndo()) {
            this.element = this.undoStack.pop();
            this.element.undo();
            this.redoStack.push(this.element);
        }
    }

    redo() {
        if (this.canRedo()) {
            this.element = this.redoStack.pop();
            this.element.execute();
            this.undoStack.push(this.element);
        }
    }
}