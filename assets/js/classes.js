class Post {
	constructor(
		id,
		title,
		author,
		text,
		addDate,
		likeCount,
	) {
		this._id = id;
		this._title = title;
		this._author = author;
		this._text = text;
		this._addDate = addDate;
		this._likeCount = likeCount;
	}
	set text(info) {
		if (typeof info !== "string") {
			throw new TypeError(
				"text must be string only!",
			);
		} else {
			this._text = info;
		}
	}

	set likeCount(likes) {
		if (typeof likes === "number" && likes >= 0) {
			this._likeCount = likes;
		} else {
			throw new TypeError(
				"likeCount must be a valid and not negative number!",
			);
		}
	}
	get likeCount() {
		return this._likeCount;
	}

	increaseLike() {
		this.likeCount = this.likeCount++;
	}

	decreaseLike() {
		if (this._likeCount > 0)
			this.likeCount = this.likeCount--;
	}
}

let post1 = new Post(
	1,
	"Основи Flexbox",
	"Олена Ковальчук",
	"Flexbox — це потужний інструмент для створення гнучких макетів без зайвих хитрощів з float чи position.",
	"2026-02-03",
	67,
);
