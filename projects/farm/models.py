from config import db

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String(100), nullable=False) 
    description = db.Column(db.Text) 
    price = db.Column(db.Float, nullable=False) 
    available = db.Column(db.Boolean, default=True) 
    image = db.Column(db.String(150)) 
  
class CartItem(db.Model):
    __tablename__ = 'cartitem'
    id = db.Column(db.Integer, primary_key=True) 
    product_id = db.Column(db.Integer, db.ForeignKey('product.id')) 
    quantity = db.Column(db.Integer, default=1) 