// ===== 상품 데이터 =====
const PRODUCTS = [
  { id: 1, name: "리넨 하드커버 노트", cat: "문구", emoji: "📓", price: 14000, was: 18000, rating: 4.9, reviews: 312, pop: 98, tag: "BEST", bg: "#f1e6d4",
    desc: "리넨 원단으로 감싼 하드커버 노트. 100g 미색 모조지를 사용해 만년필에도 번짐이 적습니다.", spec: ["A5 / 160페이지", "도트 내지", "실 제본으로 180° 펼침"] },
  { id: 2, name: "황동 볼펜", cat: "문구", emoji: "🖊️", price: 26000, rating: 4.7, reviews: 128, pop: 80, bg: "#efe3c2",
    desc: "쓸수록 빛이 바래며 멋이 드는 황동 바디 볼펜. 묵직한 무게감으로 필기가 안정적입니다.", spec: ["황동 소재", "0.7mm 블랙 리필 포함", "길이 13.5cm"] },
  { id: 3, name: "데스크 오거나이저", cat: "문구", emoji: "🗂️", price: 32000, rating: 4.6, reviews: 74, pop: 62, bg: "#dfe8e1",
    desc: "자작나무 합판으로 만든 3칸 정리함. 펜, 메모지, 스마트폰을 한 번에 정리하세요.", spec: ["자작나무 합판", "28 × 10 × 9cm", "미끄럼 방지 패드"] },
  { id: 4, name: "세라믹 머그컵", cat: "리빙", emoji: "☕", price: 18000, rating: 4.8, reviews: 256, pop: 95, tag: "BEST", bg: "#e9dfd6",
    desc: "손으로 빚은 듯한 유약 질감의 머그컵. 전자레인지와 식기세척기 사용이 가능합니다.", spec: ["350ml", "고화도 세라믹", "컬러: 오트밀"] },
  { id: 5, name: "미니 화분 세트", cat: "리빙", emoji: "🪴", price: 22000, was: 29000, rating: 4.5, reviews: 98, pop: 70, tag: "SALE", bg: "#d8ebd9",
    desc: "키우기 쉬운 공기정화 식물 2종과 토분 세트. 초보자도 부담 없이 시작할 수 있어요.", spec: ["스투키 + 테이블야자", "지름 9cm 토분 2개", "배양토 포함"] },
  { id: 6, name: "우드 무드등", cat: "리빙", emoji: "🕯️", price: 39000, rating: 4.7, reviews: 143, pop: 84, bg: "#f3e2c7",
    desc: "따뜻한 2700K 조명의 원목 무드등. 터치 한 번으로 3단계 밝기를 조절합니다.", spec: ["USB-C 충전", "최대 12시간 사용", "월넛 원목"] },
  { id: 7, name: "코튼 블랭킷", cat: "리빙", emoji: "🧣", price: 45000, rating: 4.9, reviews: 67, pop: 66, tag: "NEW", bg: "#e6e1ef",
    desc: "부드러운 순면 와플 조직 블랭킷. 소파나 침대 위에 툭 걸쳐 두기 좋습니다.", spec: ["면 100%", "130 × 170cm", "세탁기 사용 가능"] },
  { id: 8, name: "무선 이어폰 케이스", cat: "테크", emoji: "🎧", price: 12000, rating: 4.4, reviews: 201, pop: 76, bg: "#dde7ef",
    desc: "실리콘 소재의 슬림한 이어폰 케이스. 고리가 있어 가방에 걸어 다닐 수 있어요.", spec: ["실리콘 소재", "카라비너 포함", "무선 충전 호환"] },
  { id: 9, name: "알루미늄 노트북 거치대", cat: "테크", emoji: "💻", price: 35000, was: 42000, rating: 4.8, reviews: 189, pop: 90, tag: "SALE", bg: "#e3e6e8",
    desc: "6단계 각도 조절이 가능한 접이식 노트북 거치대. 거북목 예방에 도움을 줍니다.", spec: ["알루미늄 합금", "10~16인치 호환", "접으면 두께 1.5cm"] },
  { id: 10, name: "레트로 블루투스 스피커", cat: "테크", emoji: "📻", price: 58000, rating: 4.6, reviews: 52, pop: 58, tag: "NEW", bg: "#efd9cf",
    desc: "라디오를 닮은 레트로 디자인의 스피커. 작은 크기에도 풍부한 저음을 들려줍니다.", spec: ["블루투스 5.3", "재생 시간 10시간", "패브릭 그릴"] },
  { id: 11, name: "가죽 카드지갑", cat: "패션", emoji: "👛", price: 29000, rating: 4.7, reviews: 110, pop: 72, bg: "#ecdccb",
    desc: "베지터블 가죽으로 만든 미니 카드지갑. 사용할수록 자연스러운 에이징이 생깁니다.", spec: ["소가죽", "카드 4~6장 수납", "이니셜 각인 무료"] },
  { id: 12, name: "캔버스 토트백", cat: "패션", emoji: "👜", price: 24000, rating: 4.5, reviews: 88, pop: 64, bg: "#e2e9d8",
    desc: "13인치 노트북도 쏙 들어가는 튼튼한 캔버스 토트백. 안쪽 지퍼 포켓이 있어요.", spec: ["20수 캔버스", "38 × 40 × 12cm", "내부 포켓 2개"] },
];
const CATS = ["전체", "문구", "리빙", "테크", "패션"];
const FREE_SHIP = 50000;
const SHIP_FEE = 3000;

// ===== 상태 (localStorage에 저장) =====
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
let cart = load("ml_cart", {});      // { id: qty }
let wish = load("ml_wish", []);      // [id]
let state = { cat: "전체", q: "", sort: "popular" };
let drawerMode = "cart";              // "cart" | "wish"

const $ = (s) => document.querySelector(s);
const won = (n) => n.toLocaleString("ko-KR") + "원";
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const save = () => {
  localStorage.setItem("ml_cart", JSON.stringify(cart));
  localStorage.setItem("ml_wish", JSON.stringify(wish));
};

// ===== 탭 =====
function renderTabs() {
  $("#tabs").innerHTML = CATS.map((c) =>
    `<button class="tab ${c === state.cat ? "active" : ""}" data-cat="${c}" role="tab">${c}</button>`
  ).join("");
}

// ===== 상품 목록 =====
function cardHTML(p, i) {
  const off = p.was ? Math.round((1 - p.price / p.was) * 100) : 0;
  return `
  <article class="card" style="animation-delay:${i * 40}ms">
    <div class="thumb" style="background:${p.bg}" data-detail="${p.id}">
      ${p.tag ? `<span class="tag ${p.tag === "SALE" ? "sale" : ""}">${p.tag}</span>` : ""}
      <span class="emoji">${p.emoji}</span>
      <button class="wish ${wish.includes(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="찜하기">${wish.includes(p.id) ? "♥" : "♡"}</button>
    </div>
    <div class="card-body">
      <span class="cat">${p.cat}</span>
      <h3 data-detail="${p.id}">${p.name}</h3>
      <span class="rating"><b>★ ${p.rating}</b> (${p.reviews})</span>
      <div class="price">
        ${off ? `<span class="off">${off}%</span>` : ""}
        <strong>${won(p.price)}</strong>
        ${p.was ? `<del>${won(p.was)}</del>` : ""}
      </div>
      <button class="btn btn-primary" data-add="${p.id}">장바구니 담기</button>
    </div>
  </article>`;
}

function renderGrid() {
  const q = state.q.trim().toLowerCase();
  let list = PRODUCTS.filter((p) =>
    (state.cat === "전체" || p.cat === state.cat) &&
    (!q || (p.name + p.desc + p.cat).toLowerCase().includes(q))
  );
  const sorters = {
    popular: (a, b) => b.pop - a.pop,
    low: (a, b) => a.price - b.price,
    high: (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
  };
  list.sort(sorters[state.sort]);
  $("#grid").innerHTML = list.map(cardHTML).join("");
  $("#empty").hidden = list.length > 0;
}

// ===== 장바구니 / 찜 =====
function addToCart(id, qty = 1) {
  cart[id] = (cart[id] || 0) + qty;
  save(); updateBadges(); renderDrawer();
  toast(`🛒 ${byId(id).name}을(를) 담았어요`);
}
function setQty(id, qty) {
  if (qty <= 0) delete cart[id]; else cart[id] = qty;
  save(); updateBadges(); renderDrawer();
}
function toggleWish(id) {
  const on = wish.includes(id);
  wish = on ? wish.filter((x) => x !== id) : [...wish, id];
  save(); updateBadges(); renderGrid(); renderDrawer();
  toast(on ? "찜 목록에서 뺐어요" : "♥ 찜 목록에 추가했어요");
}

function updateBadges() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  bump($("#cartCount"), count);
  bump($("#wishCount"), wish.length);
}
function bump(el, val) {
  if (el.textContent !== String(val)) {
    el.textContent = val;
    el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
  }
}

function totals() {
  const subtotal = Object.entries(cart).reduce((s, [id, q]) => s + byId(+id).price * q, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIP ? 0 : SHIP_FEE;
  return { subtotal, shipping, total: subtotal + shipping };
}

function renderDrawer() {
  const body = $("#drawerBody");
  const foot = $("#drawerFoot");
  if (drawerMode === "wish") {
    $("#drawerTitle").textContent = `찜 목록 (${wish.length})`;
    foot.style.display = "none";
    body.innerHTML = wish.length ? wish.map((id) => {
      const p = byId(id);
      return `<div class="line-item">
        <div class="line-thumb" style="background:${p.bg}">${p.emoji}</div>
        <div><h4>${p.name}</h4><div class="lp">${won(p.price)}</div>
          <button class="remove" data-wish="${p.id}">삭제</button></div>
        <button class="btn btn-primary" style="padding:8px 14px;font-size:.85rem" data-add="${p.id}">담기</button>
      </div>`;
    }).join("") : `<div class="drawer-empty"><div>♡</div>아직 찜한 상품이 없어요.</div>`;
    return;
  }
  const entries = Object.entries(cart);
  $("#drawerTitle").textContent = `장바구니 (${entries.length})`;
  foot.style.display = "";
  body.innerHTML = entries.length ? entries.map(([id, q]) => {
    const p = byId(+id);
    return `<div class="line-item">
      <div class="line-thumb" style="background:${p.bg}">${p.emoji}</div>
      <div><h4>${p.name}</h4><div class="lp">${won(p.price)}</div>
        <div class="qty"><button data-dec="${p.id}" aria-label="수량 감소">−</button><span>${q}</span><button data-inc="${p.id}" aria-label="수량 증가">+</button></div>
      </div>
      <div style="text-align:right"><strong>${won(p.price * q)}</strong><br><button class="remove" data-del="${p.id}">삭제</button></div>
    </div>`;
  }).join("") : `<div class="drawer-empty"><div>🛒</div>장바구니가 비어 있어요.<br>마음에 드는 상품을 담아 보세요!</div>`;

  const t = totals();
  $("#subtotal").textContent = won(t.subtotal);
  $("#shipping").textContent = t.shipping ? won(t.shipping) : "무료";
  $("#total").textContent = won(t.total);
  $("#shipHint").textContent = t.subtotal > 0 && t.subtotal < FREE_SHIP
    ? `${won(FREE_SHIP - t.subtotal)} 더 담으면 무료 배송!` : (t.subtotal ? "🎉 무료 배송이 적용됐어요" : "");
  $("#checkoutBtn").disabled = entries.length === 0;
}

function openDrawer(mode) {
  drawerMode = mode; renderDrawer();
  $("#drawer").classList.add("open"); $("#overlay").classList.add("show");
}
function closeDrawer() {
  $("#drawer").classList.remove("open"); $("#overlay").classList.remove("show");
}

// ===== 모달 =====
function openModal(html) {
  $("#modalCard").innerHTML = `<button class="icon-btn modal-close" data-close aria-label="닫기">✕</button>` + html;
  $("#modal").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  $("#modal").classList.remove("show");
  document.body.style.overflow = "";
}

function openDetail(id) {
  const p = byId(id);
  let qty = 1;
  openModal(`
    <div class="detail">
      <div class="thumb" style="background:${p.bg}"><span class="emoji">${p.emoji}</span></div>
      <div class="detail-info">
        <span class="cat">${p.cat}</span>
        <h3>${p.name}</h3>
        <span class="rating"><b>★ ${p.rating}</b> · 리뷰 ${p.reviews}개</span>
        <div class="price"><strong style="font-size:1.4rem">${won(p.price)}</strong>${p.was ? `<del>${won(p.was)}</del>` : ""}</div>
        <p>${p.desc}</p>
        <ul>${p.spec.map((s) => `<li>${s}</li>`).join("")}</ul>
        <div class="detail-actions">
          <div class="qty"><button id="dDec">−</button><span id="dQty">1</span><button id="dInc">+</button></div>
          <button class="btn btn-primary" id="dAdd">장바구니 담기</button>
          <button class="icon-btn" id="dWish" style="font-size:1.4rem">${wish.includes(p.id) ? "♥" : "♡"}</button>
        </div>
      </div>
    </div>`);
  $("#dDec").onclick = () => { qty = Math.max(1, qty - 1); $("#dQty").textContent = qty; };
  $("#dInc").onclick = () => { qty = Math.min(99, qty + 1); $("#dQty").textContent = qty; };
  $("#dAdd").onclick = () => { addToCart(p.id, qty); closeModal(); };
  $("#dWish").onclick = () => { toggleWish(p.id); $("#dWish").textContent = wish.includes(p.id) ? "♥" : "♡"; };
}

function openCheckout() {
  const t = totals();
  closeDrawer();
  openModal(`
    <div class="done">
      <div class="big">📦</div>
      <h3>주문서 작성</h3>
      <p>결제 예정 금액 <strong>${won(t.total)}</strong></p>
      <p style="font-size:.8rem">※ 데모 사이트이므로 실제 결제는 진행되지 않습니다. 가짜 정보를 입력해도 괜찮아요.</p>
      <form class="form" id="orderForm">
        <label>받는 분 <input required name="name" placeholder="홍길동"></label>
        <label>연락처 <input required name="phone" placeholder="010-0000-0000"></label>
        <label>주소 <input required name="addr" placeholder="서울시 ○○구 ○○로 00"></label>
        <button class="btn btn-primary btn-block" type="submit">${won(t.total)} 주문 완료하기</button>
      </form>
    </div>`);
  $("#orderForm").onsubmit = (e) => {
    e.preventDefault();
    const name = new FormData(e.target).get("name");
    const orderNo = "ML" + Date.now().toString().slice(-8);
    cart = {}; save(); updateBadges(); renderDrawer();
    openModal(`
      <div class="done">
        <div class="big">🎉</div>
        <h3>주문이 완료되었어요!</h3>
        <p>${escapeHTML(name)}님, 모노리프를 이용해 주셔서 감사합니다.</p>
        <p>주문번호 <strong>${orderNo}</strong></p>
        <button class="btn btn-primary" data-close>쇼핑 계속하기</button>
      </div>`);
  };
}

const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ===== 토스트 =====
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

// ===== 이벤트 =====
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-cat],[data-add],[data-wish],[data-detail],[data-inc],[data-dec],[data-del],[data-close]");
  if (!t) return;
  const d = t.dataset;
  if (d.cat) { state.cat = d.cat; renderTabs(); renderGrid(); }
  else if (d.add) { e.stopPropagation(); addToCart(+d.add); }
  else if (d.wish) { e.stopPropagation(); toggleWish(+d.wish); }
  else if (d.detail) openDetail(+d.detail);
  else if (d.inc) setQty(+d.inc, cart[d.inc] + 1);
  else if (d.dec) setQty(+d.dec, cart[d.dec] - 1);
  else if (d.del) setQty(+d.del, 0);
  else if ("close" in d) closeModal();
});

$("#search").addEventListener("input", (e) => { state.q = e.target.value; renderGrid(); });
$("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
$("#cartBtn").onclick = () => openDrawer("cart");
$("#wishBtn").onclick = () => openDrawer("wish");
$("#closeDrawer").onclick = closeDrawer;
$("#overlay").onclick = closeDrawer;
$("#checkoutBtn").onclick = openCheckout;
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeDrawer(); } });
$("#menuBtn").onclick = () => $("#nav").classList.toggle("open");
$("#nav").addEventListener("click", (e) => { if (e.target.tagName === "A") $("#nav").classList.remove("open"); });
$("#newsForm").onsubmit = (e) => {
  e.preventDefault();
  toast("📮 구독해 주셔서 감사합니다!");
  e.target.reset();
};

// ===== 시작 =====
renderTabs();
renderGrid();
updateBadges();
renderDrawer();
