export default class TodoItem {
  constructor(text, id) {
    this.id = id;
    this.text = text;
    this.isCompleted = false;
    this.createdAt = new Date();
  }
}
