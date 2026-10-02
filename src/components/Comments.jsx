import { mockComments } from "../data/mockComments";
import { ArrowRight } from "../assets/icons/ArrowRight";

const Comments = () => {
  return (
    <section>
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
        Comments
      </h2>

      {/* Comment input */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-9 h-9 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-sm font-bold text-white/40">
          U
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Share your thoughts..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 transition-colors"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors text-lg">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Placeholder comments */}
      <div className="space-y-9">
        {mockComments.map((comment) => (
          <div key={comment.user} className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-sm font-bold text-white/50">
              {comment.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-sm font-semibold text-white/80">
                  {comment.user}
                </span>
                <span className="text-xs text-white/25">{comment.time}</span>
              </div>
              <p className="text-sm text-white/55 leading-relaxed">
                {comment.text}
              </p>
              <div className="flex gap-4 mt-2 text-xs text-white/25">
                <button className="hover:text-white/50 transition-colors">
                  ♡ Like
                </button>
                <button className="hover:text-white/50 transition-colors">
                  ↩ Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
