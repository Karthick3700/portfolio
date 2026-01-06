import "./styles/todo.css";

const Todo = () => {
  return (
    <div className="container">
      <div className="banner">
        <h1>📱 Mobile Applications</h1>
        <p>
          A comprehensive mobile solution seamlessly integrated with enterprise
          resource planning systems
        </p>
        <span className="badge">🚀 Personal Project</span>
      </div>
      <div className="section">
        <p>
          I personally designed and developed this mobile application from
          scratch to provide seamless access to our ERP system on the go. The
          app enables users to manage inventory, track transactions, view
          reports, and perform critical business operations directly from their
          mobile devices.
        </p>

        <div className="overview">
          <div className="overview-card">
            <h3>🎯 Purpose</h3>
            <p>
              Enable mobile access to ERP functionalities for improved
              productivity and real-time decision making
            </p>
          </div>
          <div className="overview-card">
            <h3>👤 Role</h3>
            <p>
              Full Stack Developer - Designed, developed, and deployed the
              entire application
            </p>
          </div>
          <div className="overview-card">
            <h3>⏱️ Duration</h3>
            <p>
              6 months of development with ongoing maintenance and feature
              updates
            </p>
          </div>
          <div className="overview-card">
            <h3>🎨 Platform</h3>
            <p>Cross-platform mobile application supporting Android devices</p>
          </div>
        </div>
      </div>
      <div className="section">
        <h4>Mobile Applications developed</h4>
        <div className="overview">
          <div className="overview-card">
            <h2>Aarel Todo</h2>
            <p>
              Daywise Purchase, sales, payments, receipts, task planning,
              tracking, and daily activity management.
            </p>
          </div>
          <div className="overview-card">
            <h2>Aarel Tiara</h2>
            <p>
              Maintain customers, buyers, sellers tracking of their purchase,
              sales, payments. Gold purchase and sales entry with automated
              ledger management and transaction history.
            </p>
          </div>
          <div className="overview-card">
            <h2>Aarel Mould</h2>{" "}
            <p>
              Maintaining Inward, outward, available of stock, pending stocks
              management. Customer-wise mould sales entry, order tracking, and
              reporting.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h4>Key Features</h4>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Dashboard</h3>
            <p>
              Access live business metrics, sales data, and key performance
              indicators at a glance
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Inventory Management</h3>
            <p>
              Track stock levels, manage items, and view detailed inventory
              reports on the move
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Transaction Processing</h3>
            <p>
              Create and manage purchases, sales, bookings, and payment
              transactions seamlessly
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Analytics & Reports</h3>
            <p>
              Generate comprehensive reports including ledgers, stock reports,
              and profit & loss statements
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Authentication</h3>
            <p>
              Multi-level security with role-based access control and encrypted
              data transmission
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Real-time Sync</h3>
            <p>
              Instant synchronization with the main ERP system ensuring data
              consistency
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Account Management</h3>
            <p>
              Manage customer and supplier accounts with complete transaction
              history
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Metal Trading</h3>
            <p>
              Specialized features for metal receipt, payment, and conversion
              transactions
            </p>
          </div>
        </div>
      </div>
      {/* <div className="section">
        <h4>Application Screenshots</h4>
        <div className="screenshots">
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <span>📱 Dashboard Screen</span>
            </div>
            <div className="screenshot-info">
              <h3>Dashboard</h3>
              <p>Overview of key metrics and quick access to main features</p>
            </div>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <span>📋 Transaction List</span>
            </div>
            <div className="screenshot-info">
              <h3>Transaction Management</h3>
              <p>View and manage all business transactions in one place</p>
            </div>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <span>📊 Reports View</span>
            </div>
            <div className="screenshot-info">
              <h3>Reports & Analytics</h3>
              <p>Detailed reports with filters and export capabilities</p>
            </div>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <span>📦 Inventory Screen</span>
            </div>
            <div className="screenshot-info">
              <h3>Inventory Management</h3>
              <p>Real-time stock tracking and item management</p>
            </div>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <span>💳 Payment Screen</span>
            </div>
            <div className="screenshot-info">
              <h3>Payment Processing</h3>
              <p>Secure payment transactions with receipt generation</p>
            </div>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <span>👤 Profile Settings</span>
            </div>
            <div className="screenshot-info">
              <h3>User Profile</h3>
              <p>Account settings and preferences management</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="section">
        <h4>Technology Stack</h4>
        <div className="tech-stack">
          <span className="tech-badge">React Native</span>
          <span className="tech-badge">JavaScript</span>
          <span className="tech-badge">REST API</span>
          <span className="tech-badge">Node.js</span>
          <span className="tech-badge">SQL Database</span>
          <span className="tech-badge">Redux</span>
          <span className="tech-badge">Axios</span>
          <span className="tech-badge">AsyncStorage</span>
          <span className="tech-badge">React Navigation</span>
        </div>
      </div>
      <div className="section">
        <h4>ERP Integration</h4>
        <div className="overview">
          <div className="overview-card">
            <h3>🔗 API Integration</h3>
            <p>
              RESTful API connections for seamless data exchange between mobile
              app and ERP backend
            </p>
          </div>
          <div className="overview-card">
            <h3>⚡ Real-time Updates</h3>
            <p>
              Live data synchronization ensures users always have the most
              current information
            </p>
          </div>
          <div className="overview-card">
            <h3>🛡️ Security</h3>
            <p>
              Encrypted communication and token-based authentication for secure
              transactions
            </p>
          </div>
          <div className="overview-card">
            <h3>📱 Offline Support</h3>
            <p>
              Cache critical data for offline access with automatic sync when
              connection is restored
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h4>Project Impact</h4>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Increased Efficiency</h3>
            <p>
              Reduced transaction processing time by 60% with mobile access to
              critical features
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Better Decision Making</h3>
            <p>
              Real-time access to data enables faster and more informed business
              decisions
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>User Satisfaction</h3>
            <p>
              High user adoption rate with positive feedback on app usability
              and performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
